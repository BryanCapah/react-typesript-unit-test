import { render, screen, fireEvent } from "@testing-library/react"
import { TestPlayround, Title } from "../../component/title"

test('cek teks title jika ada props name', async () => {
  render(<Title text='brian' />)
  // screen.debug()
  const component = await screen.findByText(`your name is ${'brian'}`)
  expect(component).toBeInTheDocument()
})

test('cek teks title jika gak ada props', async () => {
  render(<Title text='' />)
  const component = await screen.findByPlaceholderText('title name')
  expect(component).not.toBeVisible()
})

test('cek sebelum click, input disabled, setelah klik, input enabled', async () => {
  render(<TestPlayround />)
  const input = screen.getByRole('textbox', { name: /Text/i })
  const button = screen.getByRole('button', {
    name: 'enable me'
  })
  expect(input).toBeDisabled()
  fireEvent.click(button)
  expect(input).toBeEnabled()

})
