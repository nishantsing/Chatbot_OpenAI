import { config } from 'dotenv'
config();

import OpenAI from 'openai'
import readline from 'readline'

// import {argv} from 'process'

const openai = new OpenAI({
    // apiKey: API_KEY //defaults to process.env["OPEN_API_KEY"]
})

// console.log(argv[2])

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt(); // shows the prompt
userInterface.on("line", async input => { // listening on enter event on the prompt
    const res = await openai.chat.completions.create({
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
    })
    console.log(res.choices[0].message.content);
    userInterface.prompt();
    // .then(res => {
    //     console.log(res.choices[0].message.content);
    // })
});

