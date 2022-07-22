import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";

import { initialValues, signInSchema } from "../validations/signInSchema";

const SignInForm = () => {
    return (
        <Formik
            initialValues={initialValues}
            validationSchema={signInSchema}
            onSubmit={(values: any) => {
                console.log(values);
            }}
        >
            {(formik: any) => {
                const { errors, touched, isValid, dirty } = formik;
                return (
                    <Container>
                        <Title>Sign in to continue</Title>
                        <Form>
                            <Row>
                                <Label>Email</Label>
                                <TextField 
                                    type="email"
                                    name="email"
                                    id="email"
                                    errors={errors.email && touched.email}
                                />
                                <Error name="email" component="span" />
                            </Row>

                            <Row>
                                <Label>Password</Label>
                                <TextField 
                                    type="password"
                                    name="password"
                                    id="password"
                                    errors={errors.password && touched.password}
                                />
                                <Error name="password" component="span" />
                            </Row>

                            <Button 
                                type="submit" 
                                disabled={!(dirty && isValid)}
                            >
                                Sign In
                            </Button>
                        </Form>
                    </Container>
                )
            }}
        </Formik>
    );
};

const Container = styled.div`
    margin-top: 5rem;
    padding: 3rem 4rem;
    border-radius: 4px;
    background: #fff;
    box-shadow: 10px 10px 20px rgba(#dedee6, 0.4),
    -10px -10px 20px rgba(#dedee6, 0.8),
    -8px 8px 30px rgba(#dedee6, 1);
`;

const Title = styled.h1`
    font-size: 2rem;
    color: #293241;
    margin-bottom: 2rem;
`;

const Row = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 1.5rem;
`;

const Label = styled.label`
  color: #293241;
  font-size: 1.4rem;
  margin-bottom: 0.5rem;
`;

const TextField = styled(Field)<{ errors: any }>`
    color: #293241;
    border: 2pz solid rgba(#1d3557, 0.8);
    border-radius: 4px;
    padding: 0.5rem 1rem;
    padding-left: 1rem;
    font-size: 1rem;

    ${({ errors }) => 
        errors && `
        border-color: #e63946;
    `};
`;

const Button = styled.button`
    color: #fff;
    width: 100%;
    font-size: 1.2rem;
    background: #1d3557;
    border-radius: 4px;
    border: none;
    cursor: pointer;
    padding: 0.7rem 1.2rem;
    margin-top: 0.8rem;

    &:hover {
        background: rgba(#1d3557, 0.8);
    }

    &:disabled {
        cursor: not-allowed;
        background: rgba(#1d3557, 0.8);
    }
`;

const Error = styled(ErrorMessage)`
    color: #e63946;
    font-size: 1rem;
    margin-top: 0.3rem;
`;

export default SignInForm;