import Link from "./common/Link"
import Button from "./common/Button";
import Form from "./FormComponents/Form";
import FormButtonWrapper from "./FormComponents/FormButtonWrapper";
import FormHeader from "./FormComponents/FormHeader";
import FormInput from "./FormComponents/FormInput";
import FormWrapper from "./FormComponents/FormWrapper";
import Header from "./FormComponents/Header";
import HeaderText from "./FormComponents/HeaderText"

const Login: React.FC = () => {
    return(
        <>
            <Header>
                <HeaderText>SANDCRAFT STOCK EXCHANGE</HeaderText>
            </Header>
            <FormWrapper>
                <FormHeader>
                    <HeaderText>Sign into the SCSE</HeaderText>
                </FormHeader>
                <FormButtonWrapper>
                    <Form>
                        <FormInput type="email" placeholder="example@example.com"/>
                        <FormInput type="password" placeholder="Password"/>
                        <Button type="submit" width="40%" height="20%" hoverColor="#5c5c5c" margin="15px">Login</Button>
                    </Form>
                    <p>Don't have an account? <Link href="/register" color="#fff" hoverColor="#5386d4">Sign up</Link></p>
                </FormButtonWrapper>
            </FormWrapper>
        </>
    )
}

export default Login;