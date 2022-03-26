import React from 'react';
import './Blog.css';

const Blog = () => {
    return (
        <div className='blog-container'>
            <div className='react-work-info'>
                <h2>How React JS Works?</h2>
                <p> Single page application(SPA) ওয়েবসাইট তৈরি করার জন্য বর্তমান সময়ে সবচেয়ে জনপ্রিয় library হল React JS । এই জনপ্রিয়তার পেছনে সবচেয়ে বড় ভূমিকা হল React এর working process। একটি সাইট যখন লোড হয় তখন Browser DOM এর পাশাপাশি React একটি Virtual DOM create করে। ইউজার যখন সাইটের মধ্যে কোনো কিছু পরিবর্তন করে তখন React পুরো DOM পুনরায় রেন্ডার না করে সে তার Virtual DOM এর সাহায্যে শুধু পরিবর্তীত স্থানে পরিবর্তন করে। অর্থাৎ DOM re-render না করেই React UIতে পরিবর্তন সাধিত করে। এটা মূলত React এর diff algorithm সাহায্যে হয়ে থাকে। এইভাবেই React কাজ করে।</p>
            </div>
            <div className='props-state-info'>
                <h2>What is the difference between props and state? </h2>
                <p><b>Props:-</b>
                    <li>props-কে সব সময় শুধু object আকারেই রিসিভ করা যায়।</li>
                    <li>props হল read-only অর্থাৎ props এর মান রিসিভ করার পর তা আর পরিবর্তন করা যায় না।</li>
                    <li>props use করা হয় এক component থেকে অন্য component এ ডাটা পাঠানোর কাজে।</li>

                    <b>State:-</b>
                    <li>State ডাটার টাইপের উপর র্নিভর করে নিজের মান পরিবর্তন করে।</li>
                    <li>State এর মান ইউজারের আচরের উপর র্নিভর করে পরিবর্তন হয়। </li>
                    <li>State ব্যবহার করে component এর পরিবর্তনকে re-render করা হয়।  </li>
                </p>
            </div>
            <div className='use-state-info'>
                <h2>How useState works?</h2>
                <p>useState হল React এর একটি building hook. সাধারনত কোনো ওয়েবসাইট এর কোনো কিছু মান বা অন্য কোনো কিছু পরিবর্তন হওয়ার সম্ভাবনা থাকলে useState hook ব্যবহার করা হয়। useState সাধারনত একটি Array রির্টান করে। useState-কে কল করার সময় প্রাথমিক অবস্থায় একটা মান সেট করে দিতে হয় এবং তা রির্টানকৃত array এর প্রথম ভেরিয়েবলের মান হিসেবে সেট হয়ে যায়। useState তার সেকেন্ড মান হিসেবে একটা ফাংশন রির্টান করে। এই ফাংশন পরবর্তীতে ইউজ করার সময় যে মান সেট করে দেওয়া হয় তা useState হুকের প্রথম ভেরিয়েবলের মান হিসেবে সেট হয়ে যায়। এইভাবেই useState hook কাজ করে থাকে। </p>
            </div>
        </div>
    );
};

export default Blog;