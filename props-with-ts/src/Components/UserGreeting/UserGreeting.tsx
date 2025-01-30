import styles from './UserGreeting.module.css'

interface UserGreetingProps {
    isLoggedIn : boolean,
    name : string, 
}

function checkLoggedInPropType(props: UserGreetingProps) : boolean {
    return typeof props.isLoggedIn === "boolean"
}   

function checkNamePropType(props: UserGreetingProps) : boolean {
     return typeof props.name === "string"
}

function UserGreeting(props : UserGreetingProps) {
    let result1 : boolean = checkLoggedInPropType(props)
    let result2 : boolean = checkNamePropType(props)
    return (
        <>
            <div className={styles.result}>
                <h1 className={styles.text}>{props.name}</h1>
                {result1 ? <h1>Type isLoggedIn correct</h1> 
                        : <h1>Type isLoggedIn incorrect, current type : ({typeof props.isLoggedIn}), should be : (boolean)</h1>}
                {result2 ? <h1>Type name correct</h1> 
                        : <h1>Type name incorrect ({typeof props.name}), should be : (string)</h1>}
            </div>
        </>
    );
}

export default UserGreeting