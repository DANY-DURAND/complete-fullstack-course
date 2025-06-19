import inquirer from 'inquirer';
import { image } from 'qr-image';
import fs from "fs";


/*
1. Use the Inquirer npm package to get user inputs
2. Use the qr-image npm package to turn the user entered URL into a QR code image.
3. Create a txt file to save the user input using the native fs node module.
*/

const questions = [{

    type: 'input',
    name: 'URL',
    message: 'Type in your URL'

}];

inquirer.prompt(questions).then((answers) => {
    const qrCode = image(answers.URL, { type: 'png' });

    qrCode.pipe(fs.createWriteStream('qrcode.png'));

    console.log('Qr Code saved as qrcode.png');

    fs.writeFile('URL.txt', answers.URL, (err) => {
        if (err) throw err;
    });
}).catch((err) => {

    if (err.isTtyError) {
        console.error(`Error : Prompt couldn't be rendered in the current environment \n ${err.isTtyError}`);
    } else {
        console.error(`Error : ${err}`);
    }

})
