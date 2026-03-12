"use client"
import React, { useState, useEffect } from "react";
import { Link, Chip, Spinner } from "@heroui/react";

interface GitHubCommit {
    sha: string;
    commit: {
        message: string;
        author: {
            name: string;
            date: string;
        };
    };
    html_url: string;
    repository?: {
        name: string;
        full_name: string;
    };
}

export default function LatestActivityContent() {
    const [commits, setCommits] = useState<GitHubCommit[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        async function fetchLatestCommits() {
            try {
                const response = await fetch(
                    'https://api.github.com/users/neillouis3/events/public?per_page=100'
                );
                
                if (!response.ok) {
                    throw new Error('Failed to fetch commits');
                }

                const events = await response.json();
                
                const pushEvents = events
                    .filter((event: any) => event.type === 'PushEvent')
                    .slice(0, 2)
                    .flatMap((event: any) => 
                        event.payload.commits.slice(0, 1).map((commit: any) => ({
                            sha: commit.sha,
                            commit: {
                                message: commit.message,
                                author: {
                                    name: event.actor.login,
                                    date: event.created_at
                                }
                            },
                            html_url: `https://github.com/${event.repo.name}/commit/${commit.sha}`,
                            repository: {
                                name: event.repo.name.split('/')[1],
                                full_name: event.repo.name
                            }
                        }))
                    );

                setCommits(pushEvents);
                setLoading(false);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'An error occurred');
                setLoading(false);
            }
        }

        fetchLatestCommits();
    }, []);

    const formatDate = (dateString: string) => {
        const date = new Date(dateString);
        const now = new Date();
        const diffTime = Math.abs(now.getTime() - date.getTime());
        const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
        const diffHours = Math.floor(diffTime / (1000 * 60 * 60));
        const diffMinutes = Math.floor(diffTime / (1000 * 60));

        if (diffDays > 0) return `${diffDays} day${diffDays > 1 ? 's' : ''} ago`;
        if (diffHours > 0) return `${diffHours} hour${diffHours > 1 ? 's' : ''} ago`;
        if (diffMinutes > 0) return `${diffMinutes} minute${diffMinutes > 1 ? 's' : ''} ago`;
        return 'just now';
    };

    return (
        <div className="w-full h-fit min-h-[60vh] -mt-16 flex flex-col">
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-2">Latest Activity</h2>
                <p className="text-default-500 text-sm">Recent commits and updates</p>
            </div>

            {loading && (
                <div className="flex items-center gap-2">
                    <Spinner size="sm" />
                    <span className="text-default-500 text-sm">Loading recent activity...</span>
                </div>
            )}

            {error && (
                <div className="text-danger text-sm">
                    Failed to load activity: {error}
                </div>
            )}

            {!loading && !error && (
                <ul className="space-y-4 text-sm">
                    {commits.map((commit, index) => (
                        <li key={commit.sha} className="flex gap-3 items-start">
                            <div className="flex-shrink-0 mt-1">
                                <div className="w-2 h-2 rounded-full bg-primary" />
                            </div>
                            <div className="flex-1">
                                <div className="flex items-center gap-2 flex-wrap">
                                    <Link 
                                        href={commit.html_url}
                                        isExternal
                                        size="sm"
                                        className="font-medium"
                                    >
                                        {commit.commit.message.split('\n')[0]}
                                    </Link>
                                    {commit.repository && (
                                        <Chip size="sm" variant="flat" color="default">
                                            {commit.repository.name}
                                        </Chip>
                                    )}
                                </div>
                                <p className="text-default-400 text-xs mt-1">
                                    Committed {formatDate(commit.commit.author.date)}
                                </p>
                            </div>
                        </li>
                    ))}
                </ul>
            )}

            {!loading && !error && commits.length === 0 && (
                <p className="text-default-500 text-sm">No recent activity found.</p>
            )}
        </div>
    );
}
