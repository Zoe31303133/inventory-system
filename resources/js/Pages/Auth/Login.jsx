import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    useEffect(() => {
        return () => {
            reset('password');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('login'));
    };

    const FormStyle = {
        height: "350px",
        width: "350px",
        padding: "30px",

    }

    return (
        <div className='d-flex justify-content-center align-items-center h-100vh'>
            <Head title="Log in" />

            {status && <div >{status}</div>}

            <div className="d-flex justif-content-center align-items-center rounded rounded-lg bg-secondary" style={FormStyle}>
                <form  className="d-flex flex-column justify-content-center align-items-center w-100 h-100 " onSubmit={submit} >
                    <div>
                        <TextInput
                            id="email"
                            type="email"
                            name="email"
                            value={data.email}
                            placeHolder="Email"
                            
                            autoComplete="username"
                            isFocused={true}
                            onChange={(e) => setData('email', e.target.value)}
                        />

                        <InputError message={errors.email} className="mt-2" />
                    </div>

                    <div className="mt-4 gap">

                        <TextInput
                            id="password"
                            type="password"
                            name="password"
                            value={data.password}
                            placeHolder="Password"
                            autoComplete="current-password"
                            onChange={(e) => setData('password', e.target.value)}
                        />

                        <InputError message={errors.password} className="mt-2" />
                    </div>

                    <div className="mt-4">
                        <label>
                            <Checkbox
                                name="remember"
                                checked={data.remember}
                                onChange={(e) => setData('remember', e.target.checked)}
                            />
                            <span className="ms-2 text-white">Remember me</span>
                        </label>
                    </div>

                    <div className="mt-4">
                       <button className='btn  bg-dark-subtle text-secondary'>LogIn</button>
                    </div>

                </form>
            </div>
        </div>
    );
}
