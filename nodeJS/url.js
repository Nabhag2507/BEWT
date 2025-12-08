const url = "https://path1/path2/form&name=nabhag&age=18"

const newUrl = new URL(url)

console.log(newUrl.toString());
console.log(newUrl);

newUrl.searchParams.append("semester", "4")
console.log(newUrl);
