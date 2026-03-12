"use client"
import React, { useState, useEffect } from "react";
import { Link, Chip, Spinner, Table, TableHeader, TableColumn, TableBody, TableRow, TableCell } from "@heroui/react";
import sampleCommits from "@/data/sampleCommits.json";

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
    const [usingFallback, setUsingFallback] = useState(false);

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
                    .filter((event: any) => event.type === 'PushEvent' && event.payload?.commits)
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

                if (pushEvents.length === 0) {
                    setCommits(sampleCommits as GitHubCommit[]);
                    setUsingFallback(true);
                } else {
                    setCommits(pushEvents);
                }
                
                setLoading(false);
            } catch (err) {
                setCommits(sampleCommits as GitHubCommit[]);
                setUsingFallback(true);
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

            {error && !loading && (
                <div className="text-warning text-xs mb-4">
                    Using sample data (API: {error})
                </div>
            )}

            {!loading && commits.length > 0 && (
                <Table aria-label="Latest GitHub commits" removeWrapper>
                    <TableHeader>
                        <TableColumn>COMMIT</TableColumn>
                        <TableColumn>REPOSITORY</TableColumn>
                        <TableColumn>TIME</TableColumn>
                    </TableHeader>
                    <TableBody>
                        {commits.map((commit) => (
                            <TableRow key={commit.sha}>
                                <TableCell>
                                    <Link 
                                        href={commit.html_url}
                                        isExternal
                                        size="sm"
                                        className="font-medium"
                                    >
                                        {commit.commit.message.split('\n')[0]}
                                    </Link>
                                </TableCell>
                                <TableCell>
                                    {commit.repository && (
                                        <Chip size="sm" variant="flat" color="default">
                                            {commit.repository.name}
                                        </Chip>
                                    )}
                                </TableCell>
                                <TableCell>
                                    <span className="text-default-400 text-xs">
                                        {formatDate(commit.commit.author.date)}
                                    </span>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            )}

            {!loading && commits.length === 0 && (
                <p className="text-default-500 text-sm">No recent activity found.</p>
            )}
        </div>
    );
}
