describe('Orange HRM Test spec', () => {

  const selectorList = {

    checkUserRoleList: ".oxd-select-wrapper",
    checkStatusList: ".oxd-select-wrapper",
    selectRoleList: ".oxd-select-dropdown",
    selectStatusList: ".oxd-select-dropdown",
    dashbordGrid: ".orangehrm-dashboard-grid",
    buttonMyinfo:'[href="/web/index.php/pim/viewMyDetails"]',
    myinfoFirstName:".oxd-input--active",
    myinfoMiddleName:".orangehrm-middlename",
    myinfoLastName:".oxd-input--active",
    myinfoIdFunc:".oxd-input--active",
    myinfoOutherId:".oxd-input--active",
    myinfoDriveId:".oxd-input--active",
    myinfoLicense:".oxd-icon bi-calendar"

  }

  it('Login - Success', () => {
    cy.visit('/auth/login')
    cy.get('[name="username"]').type('Admin')
    cy.get('[name="password"]').type('admin123')
    cy.contains('button', ' Login ').click()
    cy.location('pathname', { timeout: 10000 }).should('equal', '/web/index.php/dashboard/index')
    cy.get(selectorList.dashbordGrid,{timeout:1000})
    cy.contains('span', 'Admin', { timeout: 10000 }).click()
    cy.get('[data-v-957b4417] .oxd-input').type('JoãoQA')
    cy.get('input[placeholder="Type for hints..."]', { timeout: 10000 }).type('freire')
    cy.get(selectorList.checkUserRoleList).eq(0).click()
    cy.contains(selectorList.selectRoleList, 'Admin').click()
    cy.get(selectorList.checkStatusList).eq(1).click()
    cy.contains(selectorList.selectStatusList, 'Enable').click()
    cy.contains('button', 'Reset').click()
    cy.get(selectorList.buttonMyinfo).click()
    cy.get(selectorList.myinfoFirstName).eq(1).clear().type('João')
    cy.get(selectorList.myinfoMiddleName).clear().type('Freire')
    cy.get(selectorList.myinfoLastName).eq(2).clear().type('Silva')
    cy.get(selectorList.myinfoIdFunc).eq(3).clear().type('1022')
    cy.get(selectorList.myinfoOutherId,{timeout:10000}).eq(4).clear().type('22')
    cy.get(selectorList.myinfoDriveId).eq(5).clear().type('856431')
    cy.get('[data-v-4a95a2e0] ,.oxd-date-wrapper').eq(0).click()
    cy.contains('[data-v-4a95a2e0] ,.oxd-date-wrapper', 'Clear').click()
    
  })
})