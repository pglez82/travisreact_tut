const path = require('path')


describe('app', () => {
  beforeEach(async () => {
    await page.goto('http://localhost:3000')
  })

  it('should display a react logo', async () => {
    await expect(page).toMatch('React')
  })

  it('should match a button with Submit text inside', async () => {
    await expect(page).toMatchElement('button', { text: 'Submit' })
  })

  it('should match a button with Submit text inside', async () => {
    await expect(page).toFillForm('form[name="register"]', {
      email: 'prueba@test.com',
      remail: 'prueba@test.com',
    })
    await expect(page).toClick('button', { text: 'Submit' })
    await expect(page).toMatchElement('span', { text: 'The user prueba@test.com has been registered!' })

  })
})