import { useSearchParams, useNavigate } from 'react-router-dom';
import JobseekerForm from '../components/JobseekerForm.jsx';
import Decoration from '../components/Decoration.jsx';
import { useEffect, useState } from 'react';
import RecruiterForm from '../components/RecruiterForm.jsx';

export default function Register() {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const [role, setRole] = useState(searchParams.get('role') || 'jobseeker');

  useEffect(() => {
    setRole(searchParams.get('role') || 'jobseeker');
  }, [searchParams]);

  useEffect(() => {
    if (role !== 'jobseeker' && role !== 'recruiter') {
      navigate('/register?role=jobseeker');
    }
  }, [role]);

  return (
    <div className='flex flex-row min-h-screen w-full'>
      <Decoration />
      {role === 'jobseeker' ? <JobseekerForm /> : <RecruiterForm />}
    </div>
  );
}
