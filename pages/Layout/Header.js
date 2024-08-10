import Logo from './layout-container/logo';
import Menu from './layout-container/menu';
import RegistrationRight from './layout-container/RegistrationRight';
export default function Header({headerClass}) {
    return (
        <>
            <header id="header" className={`site-header ${headerClass}`}>
                <div style={{width:"20%"}}>
                    <Logo/>
                </div>
                <div style={{width:"70%"}}>
                    <Menu/>
                </div>
                <div style={{width:"20%", justifyContent:"end"}}>
                    <RegistrationRight/>
                </div>
            </header>
        </>
    )
}