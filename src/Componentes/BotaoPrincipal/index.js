import styles from "./botaoprincipal.module.css"

function BotaoPrincipal({children, tamanho}){
    return (
        <button className={`
            ${styles.botao}
            ${styles[tamanho]}
            `}>
            {children}
        </button>
    )
}

export default BotaoPrincipal