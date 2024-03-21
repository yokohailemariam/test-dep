const NotFoundPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="flex flex-col justify-center items-center gap-4">
        <p className="text-5xl font-bold">404</p>
        <p className="text-xl ">Page not found</p>
        <p className="text-xl font-thin">
          The page you’re looking for doesn’t exist.
        </p>
      </div>
    </div>
  )
}

export default NotFoundPage
