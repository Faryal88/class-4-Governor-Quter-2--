import Cart from "./components/cart";

export default function Home() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-purple-500 p-8">
            <h1 className="text-5xl font-bold text-black mb-12 text-center">STUDENT IDENTIFICATION CARDS</h1>
            <div className="flex flex-col w-full items-center gap-6">
                <Cart name='Zainab Khan' age={18} rollno={1345} classe='GIAIC Quarter 2' />
                <Cart name='Raima Aamir' age={21} rollno={1538} classe='GIAIC Quarter 2' />
                <Cart name='Anumta Ali' age={20} rollno={1684} classe='GIAIC Quarter 2' />
            </div>
        </div>
    );
}
