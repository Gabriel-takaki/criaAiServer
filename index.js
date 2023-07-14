const { Configuration, OpenAIApi } = require("openai");

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

const chat_completion = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [{ role: "user", content: "Hello world" }],
});

let fakeData = {
    title : "Confeitaria da Vovó",
    description : "A Confeitaria da Vovó é uma empresa familiar que atua no mercado de doces e salgados há mais de 20 anos. Nossa missão é oferecer produtos de qualidade, com sabor caseiro e preço justo. Venha nos conhecer!",
    address : "Rua dos Bobos, 0 - Centro - São Paulo - SP",
    phone : "(11) 99999-9999"
}

async function organizeInfo(){
      
}