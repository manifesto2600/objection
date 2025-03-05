import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import scriptData from "./scriptData"; // Import data
import "./styles.css"; // Import styles

export default function ScriptSearch() {
  const [search, setSearch] = useState("");
  const [selectedObjection, setSelectedObjection] = useState(null);

  const filteredRebuttals = scriptData.filter((item) =>
    item.objection.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container">
      <Input
        placeholder="Search for an objection..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="search-box"
      />
      {filteredRebuttals.length > 0 ? (
        filteredRebuttals.map((item, index) => (
          <Card
            key={index}
            className="card"
            onClick={() =>
              setSelectedObjection(selectedObjection === index ? null : index)
            }
          >
            <CardContent className="card-content">
              <p className="objection">{item.objection}</p>
              {selectedObjection === index && (
                <div className="rebuttal-container">
                  <p>{item.rebuttal}</p>
                  {item.optional && <p className="optional">{item.optional}</p>}
                </div>
              )}
            </CardContent>
          </Card>
        ))
      ) : (
        <p className="no-results">No results found.</p>
      )}
    </div>
  );
}
