//Inspired from C++ code of Levine's Quantum Chemistry
//Js version 😁
// change value of e_r manually and then run the file and get the table of values.
var x=[-5],gap=.1,iterations=100,e_r=0,psi=[0,.001],nodes=0,g,c=gap**2/12;x[1]=x[0]+gap;
g=[x[0]**2-2*e_r,x[1]**2-2*e_r];
for(let n=1;n<=iterations-1;n++)x[n+1]=x[n]+gap,g[n+1]=x[n+1]**2-2*e_r,psi[n+1]=(2*psi[n]-psi[n-1]+10*c*g[n]*psi[n]+g[n-1]*psi[n-1]*c)/(1-g[n+1]*c),psi[n]*psi[n+1]<0&&(nodes+=1);
console.table({Er:e_r,"Number of Nodes":nodes,"Psi at x_max":psi[iterations]});
