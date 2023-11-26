import Breadcrumbs from "@/app/ui/invoices/breadcrumbs"

export default function Page() {
    return <>
        <Breadcrumbs
            breadcrumbs={[
                { label: 'Customers', href: '/dashboard/customers', active: true },
            ]}
        />
    </>
}