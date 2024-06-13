import Openai from "openai";

// const openai = new Openai({
//   organization: "YOUR_ORG_ID",
//   project: "$PROJECT_ID",
// });
const gptController = async (Request, Response) => {
//   const { dataBody } = Request.body;

  // const dataBody = {
  //   altura: "1.7m",
  //   peso: "80kg",
  //   edad: "30a",
  //   colesterol: 200,
  //   glucemia: "200mg/l",
  // };
  const { altura, peso, edad, colesterol, glucemia } = Request.body;
  const prompt = `Sobre los datos de la siguiente persona, dime niveles de kcal, azucar, grassas, sal, sodio, vitaminas, proteinas se necesitan diariamente para una buena y sana alimentacion, damelo en formato json, y con este ejemplo de estructura: kcal: { min: 1800, max: 2500 },azucar: { min: 25, max: 50 },
  grasas: { min: 44, max: 78 }? peso: ${peso}, edad: ${edad}, altura: ${altura}`;
  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      // model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: prompt }],
      // max_tokens: 4000,
      // temperature: 0.7,
    }),
  });
  const data = await response.json();
  const payload = data.choices[0].message.content;
//  console.log(typeof payload);
  // const response2 = await fetch("http://localhost:3000/products/1", {
  //   method: "POST",
  //   // headers: {
  //   //   "Content-Type": "application/json",
  //   // },
  //   body: payload,
  // });
  // console.log(response2.status);
  Response.send(payload);
};

export { gptController };
