export default function DeliverForm() {
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <form onSubmit={(e) => e.preventDefault()} className="relative w-96 my-6 mx-auto max-w-3xl bg-white p-5 rounded-lg shadow-lg">
                <h1 className="text-2xl font-bold mb-4 text-center">
                    Delivery Login Panel
                </h1>

                <input
                    type="text"
                    placeholder="Enter your email/phone"
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <input
                    type="password"
                    placeholder="Enter your password"
                    className="border border-gray-300 rounded px-3 py-2 mb-4 w-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 w-full items-center justify-center text-white font-bold py-2 px-4 rounded mb-4">
                    Login
                </button>
            </form>

        </div>
    )
}