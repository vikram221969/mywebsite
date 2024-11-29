function validate()
{
    let n=document.getElementById("name").value;
    if(n!="")
    {
    document.getElementById("display").textContent="HELLO:"+n;
}
else
{
    document.getElementById("string").textContent="matter enter cheyyi bro";
}
}
