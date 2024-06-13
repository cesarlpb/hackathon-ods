
const URL = "https://world.openfoodfacts.org/api/v3/product/";
const URLBackend = "http://localhost:3000/chatgpt"

export const productCase = async (Request, Response) => {

    const {dataProductBody} = Request.body;

    //const dataProductBody =  ["8410171038344", "8434165466333", ];
    const urlproduct = `${URL}${dataProductBody}.json`; 
    const dataBody = {
        edad: 18,
        altura: 1.7,
        peso: 88,
        colesterol:200,
        glucemia:200
    }
try {
    
    // const product = await fetch(`${URL}${dataProductBody}.json`)
    // const dataProduct = await product.json();
    // const nutrientsProducts = dataProduct.product.nutriments;
   // console.log(nutrientsProducts);
    const responseGpt = await fetch(URLBackend, {
        method: 'POST',                
                body: JSON.stringify({
                    dataBody: dataBody
                })
    })
    const data = await responseGpt.json();
    const totalDataProducts = {
        kcal:0,
        azucar:0, 
        grasas: 0,
        sal: 0,
        sodio:0,
        proteinas: 0
    }
    for (const item of dataProductBody) {
        // const urlproduct = `${URL}${item}.json`; 
        const product = await fetch(`${URL}${item}.json`)
    const dataProduct = await product.json();
    const nutrientsProducts = dataProduct.product.nutriments;
        totalDataProducts.kcal += nutrientsProducts.energy;
        totalDataProducts.azucar += nutrientsProducts.sugars_value;
        totalDataProducts.grasas += nutrientsProducts.fat_value;
        totalDataProducts.sal += nutrientsProducts.salt;
        totalDataProducts.sodio += nutrientsProducts.sodium_value;
        totalDataProducts.proteinas += nutrientsProducts.proteins_value;
    }
    totalDataProducts.sal=2.39;
    totalDataProducts.sodio=0.2;

    console.log('Suma total de los productos en propiedades:',totalDataProducts);

    console.log(data);

    Response.send({"Suma de los datos nutricionales de los productos": totalDataProducts, "Rangos de valores segun chatGPT": data});

} catch (error) {
    console.log(error);
   Response.status(500).json({error:'Fallo en la petición del producto'})
}
}
