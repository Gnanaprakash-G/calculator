let cal=localStorage.getItem('cal')||""
function update(str)
{
  cal+=str
  display()
}
function Delete()
{
  cal=''
  localStorage.setItem('cal',cal)
  display()
}
function calci()
{
  cal=eval(cal)
  localStorage.setItem('cal',cal)
  display()
}
function display()
{
  document.querySelector(".display").innerHTML=cal
}