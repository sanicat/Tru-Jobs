import DashboardLayout from '@/layouts/DashboardLayout'

export default function EmployerDashboard() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-semibold text-gray-900 dark:text-gray-100">Employer Dashboard</h1>
          <p className="text-gray-600 dark:text-gray-300">Overview of your postings and candidates.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">Active Postings</div>
            <div className="mt-2 text-2xl font-bold">8</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">New Applicants</div>
            <div className="mt-2 text-2xl font-bold">24</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">Interviews</div>
            <div className="mt-2 text-2xl font-bold">5</div>
          </div>
          <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900">
            <div className="text-sm text-gray-500 dark:text-gray-400">Shortlisted</div>
            <div className="mt-2 text-2xl font-bold">12</div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
