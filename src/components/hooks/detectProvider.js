
//detecta el proveedor al que se conecta la wallet de MetaMask
import detectEthereumProvider from "@metamask/detect-provider"


//retorna el provider o null, si ninguno es detectado
const provider = await detectEthereumProvider()

if(provider) {
    startApp(provider) //Inicializa la app
} else {
    console.log('Please install MetaMask')
}

function startApp(provider) {
    if(provider !== window.ethereum) {
        console.error('Do you have multiple wallets installed?')
    }
    //Accede a la web descentralizada
}

/**********************************************************/
/* Handle chain (network) and chainChanged (per EIP-1193) */
/**********************************************************/
//chainId refiere al id de cada red de blockchain (mainet o prueba) a la que puede estar conectada metaMask
const chainId = await ethereum.request({method: 'eth_chainId'})
handleChainChanged(chainId)

ethereum.on('chainChanged', handleChainChanged);

function handleChainChanged(_chainId) {
    window.location.reload()
}

/***********************************************************/
/* Handle user accounts and accountsChanged (per EIP-1193) */
/***********************************************************/
let currentAccount = null;
ethereum.request({method: 'eth_accounts'})
.then(handleAccountsChanged)
.catch((err) => {
    //algún error esperable
    //por config si no hay cuenta disponibles eth_accounts retornará un arreglo vacío
    console.error(err)
});

//el evento ethereum.on se emite en la página que es cargada -> si el arreglo de cuentas no está vacío significa que la página ya se encuentra conectada
ethereum.on('accountsChanged', handleAccountsChanged);

function handleAccountsChanged(accounts) {
    if(accounts.length === 0) {
        //MetaMask esta locked o el usuario no tiene cuentas conectadas a la wallet
        console.log('Please connect to MetaMask')
    } else if(accounts[0] !== currentAccount) {
        currentAccount = accounts[0]
    }
}

/*********************************************/
/* Access the user's accounts (per EIP-1102) */
/*********************************************/
//Como buena práctica se recomienda solo acceder a la cuenta del usuario en respuesta a un interacción del usuario, por ejemplo un botón para hacer click.
document.getElementById('connectButton', connect)
//mientras se espera la respuesta del pedido a eth_requestAccounts, se debe deshabilitar el botón a través del cual el usuario ya hizo un pedido.
//MetaMask va a rechazar cualquier pedido adicional mientras el primero siga en estado pending.
function connect() {
    ethereum.request({method: 'eth_requestAccounts'})
    .then(handleAccountsChanged)
    .catch((err) =>{
        if(err.code === 4001) {
            // EIP-1193 userRejectedRequest error
        // If this happens, the user rejected the connection request.
        console.log('Please connect to MetaMask.');
        } else {
            console.error(err)
        }
    })
}

