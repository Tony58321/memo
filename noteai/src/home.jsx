export default function Home({user, logout, setPage}) {
    return <>
        <h1>NoteAI</h1>
        <h3>Slogan here</h3>
        <p>welcome, {String(user)}</p>
        <button onClick={() => setPage("Note")}>New Notes</button>
        <button onClick={logout}>Logout</button>
    </>
}