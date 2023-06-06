import { Burger } from "shared/ui/Burger";
import "./ChatSearch.scss";
import { SearchInput } from "shared/ui/SearchInput";

export function ChatSearch() {
  return (
    <div className="chat-search">
      <Burger />
      <SearchInput />
    </div>
  );
}
