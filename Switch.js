const Company = "Facebook";
switch (Company) {
    case "Tesla":
        console.log("Elon Musk Owns Tesla and multiple others");
        break;
    case 'Microsoft':
        console.log("Bill gates owns Microsoft and is very rich")
    break;
    case 'Facebook':
        console.log("Mark Zuckerberg owns facebook and is kinda scary")
        break;
default:
    console.log(`Bill gates owns ${Company}.`);
}
