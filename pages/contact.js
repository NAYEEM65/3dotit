import React from 'react';
import { useForm } from 'react-hook-form';
import { FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button } from '@mui/material';
import Layout from '../components/Layout';
import Image from 'next/image';
import ContactImage from '../assets/contact.svg';

const ContactForm = () => {
    const successNotify = () => toast.success('Message Sent Successfully.');
    const failedNotify = () => toast.error('Opps! Something went wrong.');
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
        trigger,
    } = useForm();

    const onSubmit = (data) => {
        emailjs
            .send('service_65wollf', 'template_yhx1hoy', data, 'user_rqbIsiRORDSFFqka0bOim')
            .then(
                (result) => {
                    console.log(result);
                },
                (error) => {
                    failedNotify();
                },
            )
            .finally(() => {
                successNotify();
            });
        reset();
    };
    return (
        <Layout title="3DotIt || need help? please get in touch">
            <div className="contact-form app__flex">
                <div>
                    <Image width={500} height={500} src={ContactImage} alt="contact" />
                </div>
                <form className="app__footer-form app__flex" onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <legend>Get in Touch</legend>
                        <div className="app__flex form-input">
                            <input
                                type="text"
                                className="p-text"
                                placeholder="Name"
                                {...register('name', { required: 'Name is Required' })}
                                onKeyUp={() => {
                                    trigger('name');
                                }}
                            />
                            {errors.name && (
                                <small className="text-danger">{errors.name.message}</small>
                            )}
                        </div>
                        <div className="app__flex form-input ">
                            <input
                                type="text"
                                placeholder="Phone"
                                className="p-text"
                                {...register('phone', {
                                    required: 'Phone is Required',
                                    pattern: {
                                        value: /^\s*(?:\+?(\d{1,3}))?[-. (]*(\d{3})[-. )]*(\d{3})[-. ]*(\d{4})(?: *x(\d+))?\s*$/,
                                        message: 'Invalid phone no',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('phone');
                                }}
                            />
                            {errors.phone && (
                                <small className="text-danger">{errors.phone.message}</small>
                            )}
                        </div>
                        <div className="app__flex form-input">
                            <input
                                type="text"
                                placeholder="Email"
                                className="p-text"
                                {...register('email', {
                                    required: 'Email is Required',
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Invalid email address',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('email');
                                }}
                            />
                            {errors.email && (
                                <small className="text-danger">{errors.email.message}</small>
                            )}
                        </div>

                        <div className="app__flex form-input">
                            <textarea
                                className="p-text"
                                placeholder="Message"
                                rows=""
                                {...register('message', {
                                    required: 'Message is Required',
                                    minLength: {
                                        value: 10,
                                        message: 'Minimum Required length is 10',
                                    },
                                    maxLength: {
                                        value: 200,
                                        message: 'Maximum allowed length is 200 ',
                                    },
                                })}
                                onKeyUp={() => {
                                    trigger('message');
                                }}
                            ></textarea>
                            {errors.message && (
                                <small className="text-danger">{errors.message.message}</small>
                            )}
                        </div>
                        <Button
                            variant="contained"
                            sx={{ marginTop: '5px' }}
                            className="p-text send-btn"
                            type="submit"
                        >
                            <FiSend />
                            Send Message
                        </Button>
                    </fieldset>
                </form>
                <ToastContainer />
            </div>
        </Layout>
    );
};

export default ContactForm;
