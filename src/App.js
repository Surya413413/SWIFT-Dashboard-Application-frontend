import React, { useEffect, useState } from 'react';
import CommentsDashboard from './components/CommentsDashboard';
import ProfileScreen from './components/ProfileScreen';
import './styles/App.css';

const App = () => {
  const [currentScreen, setCurrentScreen] = useState('dashboard');
  const [user, setUser] = useState(null);
  const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [userRes, commentsRes] = await Promise.all([
          fetch('https://jsonplaceholder.typicode.com/users'),
          fetch('https://jsonplaceholder.typicode.com/comments')
        ]);
        const users = await userRes.json();
        const allComments = await commentsRes.json();
        setUser(users[0]);
        setComments(allComments);
      } catch (e) {
        console.error('Fetch error:', e);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return (
       <div className="App">
      <div className="loading-screen">
        <div className="loader"></div>
        <p className="loading-text">Loading application...</p>
      </div>
      </div>
    );
  }

  return (
 
  
    currentScreen === 'dashboard' ? (
    <CommentsDashboard comments={comments} onViewProfile={() => setCurrentScreen('profile')} />
  ) : (
    <ProfileScreen user={user} onBack={() => setCurrentScreen('dashboard')} />
  )


)
};

export default App;

