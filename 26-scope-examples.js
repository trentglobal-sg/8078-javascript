
// When JavaScript in the current scope, it will look for it the next outer scope
let foobar = 33;
{
    {
        console.log(foobar);

        {
            let foobar = 44;

            {
                let y = 10;
                console.log(foobar);
            }
        }
    }
}
console.log(y);