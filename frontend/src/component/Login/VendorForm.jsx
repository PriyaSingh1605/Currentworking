import { useState } from "react";
import {
    Store,
    Eye,
    EyeOff,
} from "lucide-react";



export default function VendorForm() {

    const [showPassword, setShowPassword] = useState(false);
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    return (
        <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none bg-black bg-opacity-50">
            <div className=" flex relative w-auto my-6 mx-auto max-w-3xl bg-white p-5 rounded-lg shadow-lg">
                <div className="flex flex-col items-center justify-center">
                    <div className="flex items-center justify-center mb-4">
                        <Store size={26} />
                    </div>
                    <h1 className="text-2xl font-bold mb-4 text-center">
                        Local Cart shop
                    </h1>
                    <div className="mt-20">
                        <h2 className="text-4xl font-bold leading-tight">
                            Manage your store,
                            <br />
                            grow your business.
                        </h2>

                        <p className="mt-5 max-w-md text-slate-300">
                            Manage customer requests, AI-powered orders,
                            products, inventory, and sales from one dashboard.
                        </p>
                    </div>
                

                <p className="text-sm text-slate-400">
                    © 2026 LocalCart Seller
                </p>
                </div>

                <div className="flex p-8 sm:12">
                    <div className="mx-auto max-w-md">
                        <div className="mb-8">
                            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-slate-900 text-white md:hidden">
                                <Store size={24} />
                            </div>

                            <h2 className="text-3xl font-bold text-slate-900">
                                Welcome back 👋
                            </h2>

                            <p className="mt-2 text-slate-500">
                                Login to manage your store and customer orders.
                            </p>
                        </div>

                        <form onSubmit = {handleSubmit}>
                            <div className="mb-4">
                                <label htmlFor="email" className="block text-sm font-medium text-slate-700">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="you@example.com"
                                />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="password" className="block text-sm font-medium text-slate-700">
                                    Password
                                </label>
                                <input
                                    type={showPassword ? "text" : "password"}
                                    id="password"
                                    className="mt-1 block w-full rounded-md border-slate-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                                    placeholder="••••••••"
                                />
                            </div>
                            <button type="button"
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 focus:outline-none">
                                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                            </button>

                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                            >
                                Sign in
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
        
    )
}