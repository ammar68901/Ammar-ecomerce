export default function Login() {
    return(
        <>
         <div className="flex items-center justify-center min-h-[80vh] bg-gray-100 p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-2xl p-8 ">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <form>
          {/* Email Address */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e62e84]"
              required
            />
          </div>

          {/* Phone Number */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-2" htmlFor="phone">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="Enter your phone number"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#e62e84]"
              required
            />
          </div>

          {/* Forget Password */}
          <div className="text-right mb-4">
            <a href="#" className="text-sm text-gray-500 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Sign In Button */}
          <button
            type="submit"
            className="w-full py-2 bg-[#e62e84] text-white rounded-md hover:bg-[#e62e84] focus:outline-none focus:ring-2 focus:ring-[#e62e84]"
          >
            Sign In
          </button>
        </form>

        {/* Sign Up Option */}
        <div className="mt-6 text-center">
          <p className="text-sm">
            Don’t have an account?{" "}
            <a href="#" className="text-gray-500 hover:underline">
              Create account
            </a>
          </p>
        </div>
      </div>
    </div>
        </>
    )
}