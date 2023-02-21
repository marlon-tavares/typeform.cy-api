import 'cypress-plugin-api'

const API_URL = Cypress.env('API_BASE_URL')
const authorization = `Bearer ${Cypress.env('TYPEFORM_ACCESS_TOKEN')}`

it('verify total_items', () => {

    cy.api({
    method: 'GET',
    url: `${API_URL}themes?page_size=100&page=1`,
    headers: { authorization }

    }).should(({ status, body }) => {

      expect(status).to.eq(200)
      expect(body.total_items).to.eq(body.items.length)  
    })
})

it('verify pages', () => {
    cy.api({
    method: 'GET',
    url: `${API_URL}themes`,
    headers: { authorization }

  }).should(({ status, body }) => {
    let total_items = body.total_items
    let max_total_items = (body.page_count)
    let items_page = 10
    max_total_items *= items_page
        
    expect(status).to.eq(200)
    expect(max_total_items).to.be.greaterThan(total_items)

    let min_last_page = (max_total_items -= 10)
    expect(min_last_page).to.be.at.lessThan(total_items)
  })
})