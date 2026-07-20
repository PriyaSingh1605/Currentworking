import { useState } from "react";
import CustomerForm from "./CustomerForm";
import VendorForm from "./VendorForm";
import DeliverForm from "./deliverForm";
import RoleModal from "./roleModal";

export default function LoginForm() {
    const [role,setRole] = useState(null);
    return (    
        <>
        {role === null && ( <RoleModal setRole={setRole}/>) }

        {role === "customer" && ( <CustomerForm/>)}

        {role === "vendor" && ( <VendorForm/>)}

        {role === "deliver" && ( <DeliverForm/>)}

        </>
    )
}
