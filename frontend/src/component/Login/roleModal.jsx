export default function RoleModal({ setRole }) {
    return(
        <div className= "justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className= "relative w-96 my-6 mx-auto max-w-3xl bg-white p-5 rounded-lg shadow-lg">
                <h1 className= "text-2xl font-bold mb-4 text-center">
                    Select Login Panel
                </h1>

                <button onClick = { () => { setRole("customer")}} 
                className= "bg-blue-500 w-full hover:bg-blue-700 items-center justify-center text-white font-bold py-2 px-4 rounded mb-4">
                    Customer Panel
                </button>
                <button onClick = { () => { setRole("vendor")}} className = "bg-blue-500 hover:bg-blue-700 w-full items-center justify-center text-white font-bold py-2 px-4 rounded mb-4">
                    Vendor Panel
                </button>
                <button onClick = { () => { setRole("deliver")}}
                    className = "bg-blue-500 hover:bg-blue-700 w-full items-center justify-center text-white font-bold py-2 px-4 rounded mb-4">
                    Deliver Panel
                </button>
            </div>

        </div>
    )
}