const express = require("express");
const transactionRouter = express.Router();

const Transaction = require("../models/transaction.model");
const Book = require("../models/books.model");


transactionRouter.post("/issue", async (req, res) => {
  try {
    const { userId, bookId, quantity } = req.body;

    if (quantity <= 0) {
      return res.status(400).json({ message: "Quantity must be greater than 0" });
    }

    const book = await Book.findById(bookId);
    if (!book) {
      return res.status(404).json({ message: "Book not found" });
    }

    if (book.availableQuantity < quantity) {
      return res.status(400).json({
        message: "Not enough books available",
      });
    }

    const transaction = await Transaction.create({
      userId,
      bookId,
      quantity,
    });

    
    book.availableQuantity -= quantity;
    await book.save();

    res.status(201).json({
      message: "Book issued successfully",
      transaction,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


transactionRouter.post("/return", async (req, res) => {
  try {
    const { transactionId } = req.body;

    const transaction = await Transaction.findById(transactionId);
    if (!transaction || transaction.status === "RETURNED") {
      return res.status(400).json({ message: "Invalid transaction" });
    }

    transaction.status = "RETURNED";
    transaction.returnDate = new Date();
    await transaction.save();

    await Book.findByIdAndUpdate(transaction.bookId, {
      $inc: { availableQuantity: transaction.quantity },
    });

    res.json({ message: "Book returned successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = transactionRouter;
