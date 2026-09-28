export function isPort(v,o={}){let p=v;if(o.allowString!==false&&typeof p==="string"&&/^\d+$/u.test(p))p=Number(p);if(!Number.isInteger(p))return false;return p>=(o.allowZero?0:1)&&p<=65535;}
