import { render, screen, waitFor, waitForElementToBeRemoved } from "@testing-library/react"
import { Async } from "."

it("renders correctly", async () => {
  render(<Async />)
  
  expect(screen.getByText("Hello World!")).toBeInTheDocument()

  // await waitForElementToBeRemoved(screen.queryByText("Button"))

  await waitFor(() => {
    return expect(screen.queryByText("Button")).not.toBeInTheDocument()
  })
})