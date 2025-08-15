const Card = ({ title, description, buttonText }) => {
  return (
    <div className="ml-2 mr-2 w-60 p-6 bg-slate-50 rounded-2xl shadow-md hover:shadow-lg transition">
      <h1 className="text-center text-2xl font-bold text-primary">{title}</h1>
      <p className="mt-2 text-center text-gray-600">{description}</p>
      {buttonText && (
        <button className="mt-4 block mx-auto px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/90 transition">
          {buttonText}
        </button>
      )}
    </div>
  )
}

export default Card
