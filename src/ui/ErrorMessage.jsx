function ErrorMessage({children}) {
  return (
    <p className="flex items-center justify-center text-red-500 py-[2rem]" >
      Error: {children}
    </p>
  )
}

export default ErrorMessage
