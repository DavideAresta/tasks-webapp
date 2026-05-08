import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

interface User {
  id: number;
  username: string;
}

const AutocompleteContainer = styled.div`
  position: relative;
  width: 100%;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
`;

const SuggestionsList = styled.ul`
  position: absolute;
  width: 100%;
  background: white;
  border: 1px solid #ccc;
  list-style: none;
  padding: 0;
  margin: 0;
  max-height: 150px;
  overflow-y: auto;
`;

const SuggestionItem = styled.li`
  padding: 8px;
  cursor: pointer;
  &:hover {
    background-color: #f0f0f0;
  }
`;

const UserAutocomplete: React.FC = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState<User[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length < 3) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestions = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`/api/users/autocomplete?query=${query}`);
        setSuggestions(response.data);
      } catch (err) {
        setError('Failed to load suggestions');
      } finally {
        setLoading(false);
      }
    };

    fetchSuggestions();
  }, [query]);

  return (
    <AutocompleteContainer>
      <Input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search users..."
        aria-label="User search"
      />
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      <SuggestionsList>
        {suggestions.map((user) => (
          <SuggestionItem key={user.id}>{user.username}</SuggestionItem>
        ))}
      </SuggestionsList>
    </AutocompleteContainer>
  );
};

export default UserAutocomplete;
