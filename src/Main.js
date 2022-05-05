import EmailToolBar from "./EmailToolBar";
import EmailContent from "./EmailContent";

export default function Main() {
  return (
    <main className="email-view">
      <EmailToolBar />
      <EmailContent />
    </main>
  );
}
