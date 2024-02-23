import { gql, useQuery } from '@apollo/client';

// Define your GraphQL query and corresponding types
interface Bookmark {
  description: string;
  category: string;
}

interface User {
  id: string;
  role: string;
  email: string;
  bookmarks: Bookmark[];
}

interface Link {
  id: string;
  title: string;
  users: User[];
}

interface QueryData {
  links: Link[];
}

const GET_LINKS = gql`
  query MyQuery {
    links {
      id
      title
      users {
        id
        role
        email
        bookmarks {
          description
          category
        }
      }
    }
  }
`;

export default function HomePage() {
  // Use the useQuery hook to execute the GraphQL query
  const { loading, error, data } = useQuery<QueryData>(GET_LINKS);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  const links = data.links;

  return (
    <div>
      <h1>Links</h1>
      <ul>
        {links.map(link => (
          <li key={link.id}>
            <h2>{link.title}</h2>
            <p>{link.id}</p>
            {/* Render other properties as needed */}
          </li>
        ))}
      </ul>
    </div>
  );
}