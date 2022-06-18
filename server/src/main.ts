import createServer from "./utils/createServer"

console.log("hello from main")

async function main() {

        const app = createServer()

        try{
            const url = await app.listen(4000, '0.0.0.0')

            console.log(`server is ready at ${url}`)
        } catch(e){
            console.log(e)
            process.exit(1)
        }
}

main()