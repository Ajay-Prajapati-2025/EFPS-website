import React from "react";
import Swal from 'sweetalert2'

export default function CommentMe() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const { name, email, message } = formData;
//     const mailtoLink = `mailto:prajapatiajayrameshbhai@gmail.com?subject=Form Submission&body=Name: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
//     window.location.href = mailtoLink;
//   };


const onSubmit = async (event) => {
  event.preventDefault();
  const formData = new FormData(event.target);

  formData.append("access_key", "bf43486f-e00d-4bd0-be55-7c7592158579");

  const object = Object.fromEntries(formData);
  const json = JSON.stringify(object);

  const res = await fetch("https://api.web3forms.com/submit", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
    body: json
  }).then((res) => res.json());

  if (res.success) {
    Swal.fire({
      title: "Success!",
      text: "Your message sent successfully!!",
      icon: "success"
    });
    event.target.reset();
  }
};

  return (
    <div className=" flex flex-col gap-4  p-4 content-center justify-center ">
      <h1 className="text-lg sm:text-3xl ">Leave a comment</h1>
      <form className="flex flex-col gap-5" onSubmit={onSubmit}>
        <div className="flex flex-col sm:flex-row gap-10">
        <input
          type="text"
          name="name"
        //   value={formData.name}
        //   onChange={handleChange}
          className="bg-gray-200 p-3  rounded-xl w-1/2 focus:outline-none font-semibold"
          placeholder="Your name..."
          required
        />
        <input
          type="email"
          name="email"
        //   value={formData.email}
        //   onChange={handleChange}
          className="bg-gray-200 p-3  rounded-xl w-1/2 focus:outline-none font-semibold"
          placeholder="user123@gmail.com"
          required
        />
        </div>
        <textarea
          name="message"
        //   value={formData.message}
        //   onChange={handleChange}
          className="bg-gray-200 p-3  rounded-xl w-full focus:outline-none font-semibold"
          placeholder="Write your comment...."
          required
        ></textarea>
        <button type="submit" className="bg-gray-200 p-2 rounded-xl w-1/3 focus:outline-none hover:bg-green-600 items-center font-semibold">Submit</button>
      </form>
    </div>
  );
}
