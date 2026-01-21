const randomId = Math.floor(Math.random() *10000) + 1;
const petName = "Lester " + randomId;
const baseUrl = "https://petstore.swagger.io/v2/pet"


describe('Petstore API Automated Tests', () => {
  it('Post', () => {
    cy.request({
      method: 'POST',
      url: `${baseUrl}`,
      body: {
        "id": randomId, 
        "category": {
          "id": 1,
          "name": "Dogs"
        },
        "name": petName, 
        "photoUrls": [
         "https://www.akc.org/wp-content/uploads/2017/11/Doberman-Pinscher-standing-outdoors.jpg"
        ],
        "tags": [
      {
        "id": 0,
        "name": "Doberman"
      }
    ],
        "status": "available" 
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body.id).to.eq(randomId);
      expect(response.body.name).to.eq(petName);
    });
  })


it('GET test', ()=>{
  cy.request('GET', `${baseUrl}/${randomId}`).then((getResponse)=> {
    expect(getResponse.status).to.eq(200);
    expect(getResponse.body.name).to.eq(petName);
  })
})

it('PUT test', ()=> {
  cy.request('PUT',`${baseUrl}`,{
    id: randomId,
    name: "Lester" ,
    status: "sold"
  }).then((putResponse)=>{
    expect(putResponse.status).to.eq(200);
  })
})

})