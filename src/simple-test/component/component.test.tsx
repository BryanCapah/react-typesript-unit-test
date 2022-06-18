import { render, screen, cleanup, fireEvent } from "@testing-library/react"
import { TestPlayround, Title } from "../../component/title"

test('cek teks title jika ada props name', async () => {
  render(<Title text='brian' />)
  const component = await screen.findByText(`your name is ${'brian'}`)
  expect(component).toBeInTheDocument()
})

test('cek teks title jika gak ada props', async () => {
  render(<Title text='' />)
  const component = await screen.findByPlaceholderText('title name')
  expect(component).not.toBeVisible()
})

describe('playground component test', () => {
  beforeEach(() => render(<TestPlayround />))
  test('cek sebelum click, input disabled', async () => {
    const input = screen.getByRole('textbox', { name: /Text/i })
    expect(input).toBeDisabled()
  })

  test('cek setelah klik, input enabled', async () => {
    const input = screen.getByRole('textbox', { name: /Text/i })
    const button = screen.getByRole('button', {
      name: 'enable me'
    })
    fireEvent.click(button)
    expect(input).toBeEnabled()
  })

})