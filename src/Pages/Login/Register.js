import React from 'react';
import loginGif from '../../assets/images/loginGif.gif'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { useForm } from 'react-hook-form';

const Register = () => {
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);

    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    let registerError;
    if (user || gUser) {
        navigate(from, { replace: true });
    }
    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    if (error || gError || updateError) {
        registerError = <p className='text-red-500'><small>{error?.message || gError?.message || updateError?.message}</small></p>
    }

    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password);
        await updateProfile({ displayName: data.name });
        // console.log(data);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div
                    className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
                >
                    <img src={loginGif} className="w-full" alt="Register" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <form onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                    {errors.name?.type === 'required' && <span className="label-text-alt text-red-500">{errors.name.message}</span>}
                                </label>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="input input-bordered w-full max-w-xs"
                                    {...register("name", {
                                        required: {
                                            value: true,
                                            message: 'Name is Required'
                                        }
                                    })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                    {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                    {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                </label>
                                <input type="email" placeholder="email" className="input input-bordered" {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })} />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                    {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                    {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
                                </label>
                                <input type="password" placeholder="password" className="input input-bordered"  {...register("password", {
                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 6,
                                        message: 'Must be 6 characters or longer'
                                    }
                                })} />
                                <label className="label">
                                    <Link to="/register"
                                        className="label-text-alt link link-hover"
                                    > Forgot password? </Link>
                                </label>
                            </div>
                            {registerError}
                            <input className='btn btn-primary w-full max-w-xs text-white' type="submit" value="Register" />
                        </form>
                        <div className="form-control mt-6">
                            <p className="text-sm text-white font-semibold mt-2 pt-1 mb-0">
                                Already Registered?
                                <Link to="/login"
                                    className="text-primary"
                                > Please Login </Link>
                            </p>
                            <div className="divider">OR</div>
                            <button
                                onClick={() => signInWithGoogle()}
                                className="btn btn-outline"
                            >Continue with Google</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;