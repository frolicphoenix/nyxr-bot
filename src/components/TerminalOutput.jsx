import React, { useEffect, useRef } from 'react';
import { formatCommandParts } from '../utils/terminalUtils';

/**
 * Terminal output component that displays command history
 * @param {Object} props - Component props
 * @param {Array} props.history - Array of history items (commands and responses)
 */
const TerminalOutput = ({ history }) => {
  const outputRef = useRef(null);

  // Auto-scroll to bottom when history changes
  useEffect(() => {
    if (outputRef.current) {
      outputRef.current.scrollTop = outputRef.current.scrollHeight;
    }
  }, [history]);

  return (
    <div 
      ref={outputRef} 
      className="flex-1 p-4 font-mono text-green-400 overflow-y-auto"
    >
      {history.map((item, index) => (
        <div key={index} className="mb-1">
          {item.type === 'command' ? (
            <>
              <span className="text-white">&gt;&gt;: </span>
              {(() => {
                const parts = formatCommandParts(item.content);
                return (
                  <>
                    <span className={parts.command.className}>{parts.command.text} </span>
                    {parts.subcommand.text && (
                      <span className={parts.subcommand.className}>{parts.subcommand.text} </span>
                    )}
                    {parts.item.text && (
                      <span className={parts.item.className}>{parts.item.text} </span>
                    )}
                    {parts.input.text && (
                      <span className={parts.input.className}>{parts.input.text}</span>
                    )}
                  </>
                );
              })()}
            </>
          ) : (
            <>
              <span className="text-white">&gt;&gt;&gt; </span>
              {item.content.split('\n').map((line, i) => (
                <div key={i}>{line}</div>
              ))}
              <span className="text-white">&gt;&gt;: </span>
            </>
          )}
        </div>
      ))}
    </div>
  );
};

export { TerminalOutput };